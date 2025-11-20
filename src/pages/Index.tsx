import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [selectedCategory, setSelectedCategory] = useState('ВЫСШИЙ ЖЕНСКИЙ РАЗРЯД');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    message: ''
  });

  const bathTypes = [
    { icon: '🪵', name: 'ЛИПА', description: 'Мягкое тепло и приятный аромат' },
    { icon: '🍂', name: 'ДУБ', description: 'Глубокое парение для опытных' },
    { icon: '🌳', name: 'БЕРЁЗА', description: 'Классика русской бани' },
    { icon: '🍁', name: 'КЛЁН', description: 'Энергия и бодрость' },
    { icon: '🌿', name: 'КРАПИВА', description: 'Лечебные свойства' },
    { icon: '🌲', name: 'ХВОЯ', description: 'Чистота и свежесть' },
  ];

  const procedures = [
    { 
      title: 'ПАРЕНИЕ', 
      description: 'Профессиональные парильщики с вениками',
      image: 'https://cdn.poehali.dev/files/98a162f0-ab89-47cf-9df0-8a8803387a98.jpg'
    },
    { 
      title: 'ПОМЫВКИ', 
      description: 'Традиционные банные процедуры',
      image: 'https://cdn.poehali.dev/files/98a162f0-ab89-47cf-9df0-8a8803387a98.jpg'
    },
    { 
      title: 'СВЕЖИЙ ПАР', 
      description: 'Свежий пар каждый час',
      image: 'https://cdn.poehali.dev/files/5a7dba94-95f4-44f7-abf6-9c494d0b73dc.jpg'
    },
    { 
      title: 'ПРОФЕССИОНАЛЬНЫЙ МАССАЖ', 
      description: 'Релаксация и восстановление',
      image: 'https://cdn.poehali.dev/files/98a162f0-ab89-47cf-9df0-8a8803387a98.jpg'
    },
  ];

  const pricesData = {
    'МУЖСКОЙ РАЗРЯД': {
      '3 ЧАСА': { before: '1900 РУБ.', after: '2600 РУБ.', weekend: '2300 РУБ.' },
      'БЕЗЛИМИТ': { before: '3700 РУБ', after: '3700 РУБ', weekend: '4400 РУБ' },
      'ДЕТСКИЙ 7-13 ЛЕТ': { before: '1000 РУБ.', after: '1000 РУБ.', weekend: '1000 РУБ.' },
    },
    'ВЫСШИЙ ЖЕНСКИЙ РАЗРЯД': {
      'КАБИНЫ, 3 ЧАСА': { before: '9000 РУБ.', after: '11 600 РУБ.', weekend: '10 400 РУБ.' },
      'КАБИНЫ, ПРОДЛЕНИЕ': { before: '2400 РУБ/ЧАС', after: '2400 РУБ/ЧАС', weekend: '3600 РУБ/ЧАС' },
      'КАБИНЫ, БЕЗЛИМИТ': { before: '16 000 РУБ.', after: '16 000 РУБ.', weekend: '18 000 РУБ.' },
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', date: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-beige">
      <header className="fixed top-0 left-0 right-0 z-50 bg-beige/95 backdrop-blur-sm border-b border-brown/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="text-3xl">🛁</span>
            <span className="font-heading text-2xl text-brown">Мытищинские Бани</span>
          </div>
          <a href="tel:84993916575" className="text-brown hover:text-olive transition-colors">
            <span className="font-semibold">8(499)391-65-75</span>
          </a>
        </div>
      </header>

      <main className="pt-20">
        <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `linear-gradient(rgba(107, 114, 86, 0.4), rgba(88, 79, 61, 0.6)), url('https://cdn.poehali.dev/files/f51ddcbc-a398-48ac-bddb-575eeafb9758.jpg')`,
            }}
          />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl animate-fade-in">
            <h1 className="font-heading text-5xl md:text-7xl mb-6 leading-tight">
              ВЫСШИЙ<br/>ЖЕНСКИЙ РАЗРЯД
            </h1>
            <p className="text-xl md:text-2xl mb-4">ОБЩЕЕ ОТДЕЛЕНИЕ — ДО 50 МЕСТ</p>
            <p className="text-lg md:text-xl mb-8">ЕСТЬ КАБИНЕТ ДО 8 ГОСТЕЙ</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-beige text-brown hover:bg-beige/90 font-semibold"
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
              >
                РАСПИСАНИЕ СВЕЖЕГО ПАРА
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-olive text-beige border-beige hover:bg-olive/90"
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              >
                УЗНАТЬ БОЛЬШЕ
              </Button>
            </div>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <span className="font-accent text-terra text-3xl mb-2 block">свежее и радости,</span>
              <span className="font-accent text-terra text-3xl">сердечное блюда</span>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-olive text-beige overflow-hidden hover-scale">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">✚</div>
                  <h3 className="font-heading text-2xl mb-3">Гардероб с индивидуальными шкафчиками</h3>
                  <Separator className="bg-beige/30 my-4" />
                  <p className="text-beige/80">Безопасное хранение личных вещей</p>
                </CardContent>
              </Card>
              <Card className="bg-olive text-beige overflow-hidden hover-scale">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">✚</div>
                  <h3 className="font-heading text-2xl mb-3">Полное ресторанное обслуживание</h3>
                  <Separator className="bg-beige/30 my-4" />
                  <p className="text-beige/80">Авторское меню от бренд-шефа</p>
                </CardContent>
              </Card>
              <Card className="bg-olive text-beige overflow-hidden hover-scale">
                <CardContent className="p-8">
                  <div className="text-5xl mb-4">✚</div>
                  <h3 className="font-heading text-2xl mb-3">Парные: общая и индивидуальная</h3>
                  <Separator className="bg-beige/30 my-4" />
                  <p className="text-beige/80">Выбор под любые предпочтения</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-brown text-beige rounded-3xl p-8 md:p-12 mb-16">
              <h2 className="font-heading text-4xl md:text-5xl mb-8 text-center">
                Минимальное время бронирования — 3 часа
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {bathTypes.map((bath) => (
                  <Card 
                    key={bath.name} 
                    className="bg-beige border-2 border-beige hover:border-terra transition-all cursor-pointer hover-scale"
                  >
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl mb-3">{bath.icon}</div>
                      <h3 className="font-semibold text-brown text-lg mb-2">{bath.name}</h3>
                      <p className="text-brown/70 text-sm">{bath.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white" id="about">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-brown text-beige rounded-full w-16 h-16 flex items-center justify-center font-heading text-2xl">04</div>
              <h2 className="font-heading text-4xl text-brown">НАШ ПОДХОД</h2>
            </div>
            <h3 className="font-heading text-3xl md:text-5xl text-brown mb-8 leading-tight">
              СОЧЕТАЕМ ТРАДИЦИИ РУССКОЙ БАНИ С СОВРЕМЕННЫМ ПОДХОДОМ
            </h3>
            <p className="text-lg text-brown/80 mb-8 max-w-3xl">
              Из наших кранов течёт знаменитая мытищинская вода. Она начинала свой путь в целебных «громовых» 
              источниках, подливалась в самовары императриц и питала Москву
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {procedures.map((proc) => (
                <Card key={proc.title} className="overflow-hidden hover-scale bg-brown text-beige">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url('${proc.image}')` }}
                  />
                  <CardContent className="p-6">
                    <h4 className="font-heading text-2xl mb-2">{proc.title}</h4>
                    <p className="text-beige/80">{proc.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4" id="pricing">
          <div className="container mx-auto max-w-6xl">
            <h2 className="font-heading text-4xl md:text-5xl text-brown mb-8 text-center">
              СКОЛЬКО СТОИТ ПОСЕТИТЬ {selectedCategory}
            </h2>
            
            <div className="flex justify-center gap-4 mb-8 flex-wrap">
              <Button
                variant={selectedCategory === 'МУЖСКОЙ РАЗРЯД' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('МУЖСКОЙ РАЗРЯД')}
                className="bg-olive text-beige hover:bg-olive/90"
              >
                МУЖСКОЙ РАЗРЯД
              </Button>
              <Button
                variant={selectedCategory === 'ВЫСШИЙ ЖЕНСКИЙ РАЗРЯД' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('ВЫСШИЙ ЖЕНСКИЙ РАЗРЯД')}
                className="bg-olive text-beige hover:bg-olive/90"
              >
                ВЫСШИЙ ЖЕНСКИЙ РАЗРЯД
              </Button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden">
                <thead className="bg-olive text-beige">
                  <tr>
                    <th className="p-4 text-left font-heading text-xl"></th>
                    <th className="p-4 text-center font-heading text-xl">ПН-ВТ<br/><span className="text-sm">до 16:00</span></th>
                    <th className="p-4 text-center font-heading text-xl">ПН-ВТ<br/><span className="text-sm">после 16:00</span></th>
                    <th className="p-4 text-center font-heading text-xl">СР-ВС</th>
                  </tr>
                </thead>
                <tbody className="text-brown">
                  {Object.entries(pricesData[selectedCategory as keyof typeof pricesData]).map(([service, prices], index) => (
                    <tr key={service} className={index % 2 === 0 ? 'bg-beige/50' : 'bg-white'}>
                      <td className="p-4 font-semibold">{service}</td>
                      <td className="p-4 text-center">{prices.before}</td>
                      <td className="p-4 text-center">{prices.after}</td>
                      <td className="p-4 text-center">{prices.weekend}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-brown text-beige rounded-full w-16 h-16 flex items-center justify-center font-heading text-2xl">07</div>
              <h2 className="font-heading text-4xl text-brown">ОТЗЫВЫ</h2>
            </div>
            <h3 className="font-heading text-3xl md:text-5xl text-brown mb-8 leading-tight">
              ВПЕЧАТЛЕНИЯ ГОСТЕЙ, ИХ РАССЛАБЛЕНИЕ И СПОКОЙСТВИЕ — ЭТО ТО, ДЛЯ ЧЕГО МЫ РАБОТАЕМ
            </h3>
            <Card className="bg-beige border-brown/20 mb-8">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-olive"></div>
                    <div className="text-left">
                      <div className="font-semibold text-brown">Мытищинские Бани</div>
                      <div className="text-brown/60 text-sm">Яндекс Карты</div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-5xl font-bold text-brown">5,0</span>
                  <div className="text-yellow-500 text-2xl">★★★★★</div>
                </div>
                <p className="text-brown/70">2655 отзывов • 4448 оценок</p>
                <Button className="mt-6 bg-olive text-beige hover:bg-olive/90">
                  Больше отзывов на Яндекс Картах
                </Button>
              </CardContent>
            </Card>
            <div className="relative rounded-2xl overflow-hidden h-64">
              <img 
                src="https://cdn.poehali.dev/files/18c99668-e2a6-44b0-95da-36135422a7b2.jpg" 
                alt="Гости" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16 px-4 bg-terra text-beige" id="booking">
          <div className="container mx-auto max-w-4xl">
            <h2 className="font-heading text-4xl md:text-5xl text-center mb-8">
              МЫ СОЗДАЁМ МЕСТО, ГДЕ КАЖДЫЙ ГОСТЬ МОЖЕТ ПОЧУВСТВОВАТЬ СЕБЯ ОСОБЕННЫМ
            </h2>
            <p className="text-center text-xl mb-12">
              Вдохновлённые русскими традициями и любовью к деталям, мы стремимся обеспечить 
              максимальный комфорт и пользу от банных процедур.
            </p>
            <Card className="bg-beige">
              <CardContent className="p-8">
                <h3 className="font-heading text-3xl text-brown mb-6 text-center">ЗАБРОНИРОВАТЬ</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="bg-white border-brown/20"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="bg-white border-brown/20"
                    />
                  </div>
                  <div>
                    <Input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      required
                      className="bg-white border-brown/20"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Дополнительные пожелания" 
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-white border-brown/20"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full bg-olive text-beige hover:bg-olive/90" size="lg">
                    ОТПРАВИТЬ ЗАЯВКУ
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="py-16 px-4 bg-brown text-beige">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-beige text-brown rounded-full w-16 h-16 flex items-center justify-center font-heading text-2xl">08</div>
              <h2 className="font-heading text-4xl">БАННЫЕ ПРИНАДЛЕЖНОСТИ</h2>
            </div>
            <div className="text-center mb-8">
              <span className="font-accent text-terra text-3xl">всегда и везде</span>
            </div>
            <h3 className="font-heading text-3xl md:text-4xl text-center mb-12">
              У НАС МОЖНО ВЗЯТЬ В АРЕНДУ ВСЁ НЕОБХОДИМОЕ
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-beige text-brown hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🧺</div>
                  <h4 className="font-heading text-xl mb-2">БАННЫЕ ПРИНАДЛЕЖНОСТИ</h4>
                  <p className="text-brown/70">Полотенца, простыни, шапочки</p>
                </CardContent>
              </Card>
              <Card className="bg-beige text-brown hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🌿</div>
                  <h4 className="font-heading text-xl mb-2">ВЕНИКИ</h4>
                  <p className="text-brown/70">Все виды банных веников</p>
                </CardContent>
              </Card>
              <Card className="bg-beige text-brown hover-scale">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">🍵</div>
                  <h4 className="font-heading text-xl mb-2">ЧАЙ И УГОЩЕНИЯ</h4>
                  <p className="text-brown/70">Травяной чай после парной</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-olive text-beige py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-heading text-2xl mb-4">Мытищинские Бани</h4>
              <p className="text-beige/80">Премиум банный комплекс с русскими традициями</p>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-4">Контакты</h4>
              <div className="space-y-2 text-beige/80">
                <p>Телефон: 8(499)391-65-75</p>
                <p>Режим работы: ежедневно 10:00 - 23:00</p>
              </div>
            </div>
            <div>
              <h4 className="font-heading text-xl mb-4">Бонусная программа</h4>
              <p className="text-beige/80 mb-4">Оплачивайте баллами до 30% от суммы счета</p>
              <Button variant="outline" className="border-beige text-beige hover:bg-beige hover:text-olive">
                Подробнее о картах
              </Button>
            </div>
          </div>
          <Separator className="bg-beige/30 mb-6" />
          <div className="text-center text-beige/60">
            <p>© 2024 Мытищинские Бани. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
