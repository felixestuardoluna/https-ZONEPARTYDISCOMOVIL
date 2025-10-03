import { useState, useEffect } from 'react';
import { Camera, Video, Plus, Trash2, CreditCard as Edit, Save, X } from 'lucide-react';
import { supabase, MediaItem } from '../lib/supabase';

export default function MediaAdmin() {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MediaItem | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    media_type: 'photo' as 'photo' | 'video',
    media_url: '',
    thumbnail_url: '',
    event_type: '',
    is_featured: false,
    display_order: 0
  });

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    const { data } = await supabase
      .from('media_items')
      .select('*')
      .order('display_order', { ascending: true });

    setMediaItems(data || []);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (editingItem) {
      await supabase
        .from('media_items')
        .update({
          ...formData,
          updated_at: new Date().toISOString()
        })
        .eq('id', editingItem.id);
    } else {
      await supabase
        .from('media_items')
        .insert([formData]);
    }

    resetForm();
    loadMedia();
  };

  const handleDelete = async (id: string) => {
    if (confirm('¿Estás seguro de eliminar este elemento?')) {
      await supabase
        .from('media_items')
        .delete()
        .eq('id', id);

      loadMedia();
    }
  };

  const handleEdit = (item: MediaItem) => {
    setEditingItem(item);
    setFormData({
      title: item.title,
      media_type: item.media_type,
      media_url: item.media_url,
      thumbnail_url: item.thumbnail_url || '',
      event_type: item.event_type || '',
      is_featured: item.is_featured,
      display_order: item.display_order
    });
    setIsOpen(true);
  };

  const resetForm = () => {
    setEditingItem(null);
    setFormData({
      title: '',
      media_type: 'photo',
      media_url: '',
      thumbnail_url: '',
      event_type: '',
      is_featured: false,
      display_order: 0
    });
    setIsOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Administrar Galería</h1>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <Plus className="w-5 h-5" />
            Agregar Media
          </button>
        </div>

        {/* Media List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {mediaItems.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700"
            >
              <div className="aspect-square relative">
                <img
                  src={item.media_url}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                {item.media_type === 'video' && (
                  <div className="absolute top-2 right-2 bg-black/60 p-1 rounded">
                    <Video className="w-4 h-4" />
                  </div>
                )}
                {item.is_featured && (
                  <div className="absolute top-2 left-2 bg-cyan-500 px-2 py-1 rounded text-xs">
                    Destacado
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 mb-2">{item.event_type}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(item)}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 px-3 py-2 rounded flex items-center justify-center gap-2 text-sm"
                  >
                    <Edit className="w-4 h-4" />
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 bg-red-600 hover:bg-red-700 px-3 py-2 rounded flex items-center justify-center gap-2 text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                    Eliminar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Form Modal */}
        {isOpen && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-slate-800 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">
                  {editingItem ? 'Editar Media' : 'Agregar Media'}
                </h2>
                <button
                  onClick={resetForm}
                  className="w-10 h-10 bg-slate-700 hover:bg-slate-600 rounded-full flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Título</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full bg-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tipo</label>
                  <select
                    value={formData.media_type}
                    onChange={(e) => setFormData({ ...formData, media_type: e.target.value as 'photo' | 'video' })}
                    className="w-full bg-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    <option value="photo">Foto</option>
                    <option value="video">Video</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">URL del Archivo</label>
                  <input
                    type="url"
                    value={formData.media_url}
                    onChange={(e) => setFormData({ ...formData, media_url: e.target.value })}
                    className="w-full bg-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="https://..."
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Tipo de Evento</label>
                  <input
                    type="text"
                    value={formData.event_type}
                    onChange={(e) => setFormData({ ...formData, event_type: e.target.value })}
                    className="w-full bg-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Boda, Cumpleaños, etc."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Orden de Visualización</label>
                  <input
                    type="number"
                    value={formData.display_order}
                    onChange={(e) => setFormData({ ...formData, display_order: parseInt(e.target.value) })}
                    className="w-full bg-slate-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="featured"
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="w-5 h-5 bg-slate-700 border-slate-600 rounded focus:ring-cyan-500"
                  />
                  <label htmlFor="featured" className="font-semibold">
                    Destacar en página principal
                  </label>
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 hover:scale-105 transition-transform"
                  >
                    <Save className="w-5 h-5" />
                    {editingItem ? 'Actualizar' : 'Guardar'}
                  </button>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg font-semibold"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
