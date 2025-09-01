import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const sections = [
    {
      title: 'Филиал',
      description: 'Информация о структуре и деятельности филиала',
      icon: 'Building2',
      color: 'bg-blue-50 hover:bg-blue-100'
    },
    {
      title: 'Виды деятельности',
      description: 'Основные направления работы учреждения',
      icon: 'Briefcase',
      color: 'bg-green-50 hover:bg-green-100'
    },
    {
      title: 'Пресс-центр',
      description: 'Новости, пресс-релизы и объявления',
      icon: 'Newspaper',
      color: 'bg-purple-50 hover:bg-purple-100'
    },
    {
      title: 'Орган инспекции',
      description: 'Контрольная и надзорная деятельность',
      icon: 'Shield',
      color: 'bg-orange-50 hover:bg-orange-100'
    },
    {
      title: 'Противодействие коррупции',
      description: 'Антикоррупционная политика и меры',
      icon: 'Scale',
      color: 'bg-red-50 hover:bg-red-100'
    },
    {
      title: 'Контакты',
      description: 'Адрес, телефоны и режим работы',
      icon: 'Phone',
      color: 'bg-gray-50 hover:bg-gray-100'
    }
  ];

  const news = [
    {
      title: 'Обновление регламента предоставления услуг',
      date: '28 августа 2024',
      category: 'Официально'
    },
    {
      title: 'График приема граждан на сентябрь',
      date: '25 августа 2024',
      category: 'Объявление'
    },
    {
      title: 'Итоги работы за II квартал 2024 года',
      date: '20 августа 2024',
      category: 'Отчёт'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Building" size={24} className="text-slate-700" />
              <span className="text-lg font-semibold text-slate-800">Государственное учреждение</span>
            </div>
            <Button variant="outline" size="sm">
              <Icon name="Search" size={16} className="mr-2" />
              Поиск
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            Государственное
            <span className="block text-slate-600">бюджетное учреждение</span>
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Обеспечиваем качественное предоставление государственных услуг 
            и выполнение возложенных функций в интересах граждан
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-slate-800 hover:bg-slate-900">
              <Icon name="FileText" size={18} className="mr-2" />
              Получить услугу
            </Button>
            <Button variant="outline" size="lg">
              <Icon name="Download" size={18} className="mr-2" />
              Документы
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Разделы сайта
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => (
              <Card key={index} className={`transition-all duration-300 hover:shadow-lg cursor-pointer ${section.color} border-0`}>
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      <Icon name={section.icon} size={24} className="text-slate-700" />
                    </div>
                    <CardTitle className="text-lg text-slate-800">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-slate-600">
                    {section.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Актуальные новости
          </h2>
          <div className="space-y-4">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-slate-900 hover:text-slate-700 cursor-pointer">
                      {item.title}
                    </h3>
                    <Badge variant="secondary" className="ml-4">
                      {item.category}
                    </Badge>
                  </div>
                  <p className="text-slate-500 text-sm">{item.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline">
              Все новости
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Контактная информация
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MapPin" size={20} className="mr-2" />
                  Адрес
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-4">
                  г. Москва, ул. Тверская, д. 1<br />
                  125009, Российская Федерация
                </p>
                <p className="text-slate-600">
                  <strong>Режим работы:</strong><br />
                  Пн-Чт: 9:00 - 18:00<br />
                  Пт: 9:00 - 16:45<br />
                  Обед: 12:30 - 13:15
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Телефоны
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-slate-900">Приемная:</p>
                    <p className="text-slate-600">+7 (495) 123-45-67</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Горячая линия:</p>
                    <p className="text-slate-600">8-800-123-45-67</p>
                  </div>
                  <div>
                    <p className="font-medium text-slate-900">Email:</p>
                    <p className="text-slate-600">info@gov-org.ru</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">О нас</h3>
              <p className="text-slate-300">
                Государственное бюджетное учреждение, осуществляющее 
                деятельность в соответствии с федеральным законодательством.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Полезные ссылки</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Портал госуслуг</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Единый портал бюджетной системы</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Официальный сайт РФ</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Документы</h3>
              <ul className="space-y-2 text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Устав учреждения</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Положение о персональных данных</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Антикоррупционная политика</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-600 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 Государственное бюджетное учреждение. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}