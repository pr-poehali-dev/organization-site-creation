import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/components/ui/use-toast';
import Icon from '@/components/ui/icon';

interface FormData {
  name: string;
  email: string;
  phone: string;
  category: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  category?: string;
  subject?: string;
  message?: string;
}

export default function FeedbackForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    category: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const categories = [
    { value: 'complaint', label: 'Жалоба' },
    { value: 'suggestion', label: 'Предложение' },
    { value: 'question', label: 'Вопрос' },
    { value: 'info-request', label: 'Запрос информации' },
    { value: 'service', label: 'Получение услуги' },
    { value: 'other', label: 'Другое' }
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Введите ваше имя';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Имя должно содержать минимум 2 символа';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Введите email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Введите корректный email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Введите номер телефона';
    } else if (!/^[\+]?[7-8][\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Введите корректный номер телефона';
    }

    if (!formData.category) {
      newErrors.category = 'Выберите категорию обращения';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Введите тему обращения';
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Тема должна содержать минимум 5 символов';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Введите текст обращения';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Сообщение должно содержать минимум 10 символов';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        variant: "destructive",
        title: "Ошибка валидации",
        description: "Пожалуйста, исправьте ошибки в форме",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Имитация отправки данных
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Обращение отправлено!",
        description: "Мы рассмотрим ваше обращение в течение 3 рабочих дней.",
      });

      // Очистка формы
      setFormData({
        name: '',
        email: '',
        phone: '',
        category: '',
        subject: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Ошибка отправки",
        description: "Произошла ошибка при отправке обращения. Попробуйте еще раз.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <Icon name="MessageCircle" size={24} className="mr-2" />
          Форма обратной связи
        </CardTitle>
        <CardDescription>
          Направьте ваше обращение в электронном виде. Ответ будет направлен на указанный email в течение 3 рабочих дней.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Имя */}
            <div className="space-y-2">
              <Label htmlFor="name">Фамилия, имя, отчество *</Label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className={errors.name ? 'border-red-500' : ''}
                placeholder="Введите ФИО"
              />
              {errors.name && (
                <p className="text-sm text-red-500 flex items-center">
                  <Icon name="AlertCircle" size={14} className="mr-1" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email">Электронная почта *</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={errors.email ? 'border-red-500' : ''}
                placeholder="example@email.ru"
              />
              {errors.email && (
                <p className="text-sm text-red-500 flex items-center">
                  <Icon name="AlertCircle" size={14} className="mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Телефон */}
            <div className="space-y-2">
              <Label htmlFor="phone">Номер телефона *</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={errors.phone ? 'border-red-500' : ''}
                placeholder="+7 (XXX) XXX-XX-XX"
              />
              {errors.phone && (
                <p className="text-sm text-red-500 flex items-center">
                  <Icon name="AlertCircle" size={14} className="mr-1" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Категория */}
            <div className="space-y-2">
              <Label htmlFor="category">Категория обращения *</Label>
              <Select
                value={formData.category}
                onValueChange={(value) => handleInputChange('category', value)}
              >
                <SelectTrigger className={errors.category ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Выберите категорию" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.category && (
                <p className="text-sm text-red-500 flex items-center">
                  <Icon name="AlertCircle" size={14} className="mr-1" />
                  {errors.category}
                </p>
              )}
            </div>
          </div>

          {/* Тема обращения */}
          <div className="space-y-2">
            <Label htmlFor="subject">Тема обращения *</Label>
            <Input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={(e) => handleInputChange('subject', e.target.value)}
              className={errors.subject ? 'border-red-500' : ''}
              placeholder="Кратко опишите суть обращения"
            />
            {errors.subject && (
              <p className="text-sm text-red-500 flex items-center">
                <Icon name="AlertCircle" size={14} className="mr-1" />
                {errors.subject}
              </p>
            )}
          </div>

          {/* Текст обращения */}
          <div className="space-y-2">
            <Label htmlFor="message">Текст обращения *</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className={`min-h-32 ${errors.message ? 'border-red-500' : ''}`}
              placeholder="Подробно изложите суть вашего обращения..."
            />
            {errors.message && (
              <p className="text-sm text-red-500 flex items-center">
                <Icon name="AlertCircle" size={14} className="mr-1" />
                {errors.message}
              </p>
            )}
          </div>

          {/* Информационное сообщение */}
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <div className="flex items-start space-x-2">
              <Icon name="Info" size={18} className="text-blue-600 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Обратите внимание:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Все поля, отмеченные звездочкой (*), обязательны для заполнения</li>
                  <li>• Ответ будет направлен на указанный email в течение 3 рабочих дней</li>
                  <li>• При необходимости с вами свяжутся по указанному телефону</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Кнопка отправки */}
          <div className="flex justify-end">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="min-w-32"
            >
              {isSubmitting ? (
                <>
                  <Icon name="Loader2" size={16} className="mr-2 animate-spin" />
                  Отправка...
                </>
              ) : (
                <>
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить обращение
                </>
              )}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}