import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  const leatherTypes = [
    {
      title: "Натуральная говяжья кожа",
      description: "Премиальная кожа высшего качества для профессионального использования",
      price: "от 1 200 ₽/м²",
      thickness: "1.5-2.0 мм",
      image: "https://v3.fal.media/files/elephant/jpdLHpnpA_5M9B8qVGp9n_output.png"
    },
    {
      title: "Овечья кожа",
      description: "Мягкая и эластичная кожа для создания аксессуаров и одежды",
      price: "от 800 ₽/м²",
      thickness: "0.8-1.2 мм",
      image: "https://v3.fal.media/files/elephant/jpdLHpnpA_5M9B8qVGp9n_output.png"
    },
    {
      title: "Телячья кожа",
      description: "Элитная кожа с идеальной текстурой для люксовых изделий",
      price: "от 2 000 ₽/м²",
      thickness: "1.0-1.4 мм",
      image: "https://v3.fal.media/files/elephant/jpdLHpnpA_5M9B8qVGp9n_output.png"
    }
  ];

  const reviews = [
    {
      name: "Мария Петрова",
      role: "Дизайнер сумок",
      comment: "Отличное качество кожи! Работаю с этой компанией уже 3 года. Всегда стабильное качество и быстрая доставка.",
      rating: 5
    },
    {
      name: "Александр Иванов",
      role: "Мебельная мастерская",
      comment: "Покупаем кожу для обивки мебели. Клиенты всегда довольны результатом. Рекомендую!",
      rating: 5
    },
    {
      name: "Елена Смирнова",
      role: "Кожевенная мастерская",
      comment: "Широкий ассортимент и профессиональная консультация. Помогли подобрать идеальную кожу для проекта.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Package" size={24} className="text-amber-700" />
              <span className="text-xl font-bold text-amber-800">LEATHER STORE</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-amber-700 hover:text-amber-900 font-medium transition-colors">Главная</a>
              <a href="#about" className="text-gray-600 hover:text-amber-900 font-medium transition-colors">О нас</a>
              <a href="#products" className="text-gray-600 hover:text-amber-900 font-medium transition-colors">Товары</a>
              <a href="#reviews" className="text-gray-600 hover:text-amber-900 font-medium transition-colors">Отзывы</a>
              <a href="#contacts" className="text-gray-600 hover:text-amber-900 font-medium transition-colors">Контакты</a>
            </nav>
            <Button className="bg-amber-700 hover:bg-amber-800 text-white">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-amber-50 to-amber-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="bg-amber-700 text-white mb-4">Премиум качество</Badge>
              <h1 className="text-5xl lg:text-6xl font-bold text-amber-900 mb-6 leading-tight">
                Натуральная кожа для любых нужд
              </h1>
              <p className="text-xl text-amber-800 mb-8 leading-relaxed">
                Широкий ассортимент высококачественной натуральной кожи от проверенных поставщиков. 
                Идеально для рукоделия, производства мебели, обуви и аксессуаров.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-amber-700 hover:bg-amber-800 text-white">
                  <Icon name="ShoppingCart" size={20} className="mr-2" />
                  Каталог товаров
                </Button>
                <Button size="lg" variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-50">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://v3.fal.media/files/elephant/jpdLHpnpA_5M9B8qVGp9n_output.png" 
                alt="Натуральная кожа" 
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                <div className="flex items-center space-x-2">
                  <Icon name="Award" size={24} className="text-amber-700" />
                  <div>
                    <p className="font-semibold text-amber-900">100% натуральная</p>
                    <p className="text-sm text-gray-600">Сертифицированное качество</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">О нас</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы специализируемся на поставке высококачественной натуральной кожи для профессионалов и любителей
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group hover-scale">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Icon name="Shield" size={32} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Все материалы проходят строгий контроль качества и имеют сертификаты</p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Icon name="Truck" size={32} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставляем по всей России в течение 3-7 рабочих дней</p>
            </div>
            
            <div className="text-center group hover-scale">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                <Icon name="Users" size={32} className="text-amber-700" />
              </div>
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Опытная команда</h3>
              <p className="text-gray-600">Более 15 лет опыта в кожевенной индустрии и тысячи довольных клиентов</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Наши товары</h2>
            <p className="text-xl text-gray-600">Широкий выбор натуральной кожи для любых задач</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leatherTypes.map((leather, index) => (
              <Card key={index} className="group hover-scale bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={leather.image} 
                    alt={leather.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-amber-700 text-white">
                    {leather.thickness}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-amber-900">{leather.title}</CardTitle>
                  <CardDescription>{leather.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-amber-700">{leather.price}</span>
                    <Badge variant="outline" className="border-amber-700 text-amber-700">
                      В наличии
                    </Badge>
                  </div>
                  <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Добавить в корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-amber-700 text-amber-700 hover:bg-amber-100">
              Показать весь каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-amber-900 mb-4">Отзывы клиентов</h2>
            <p className="text-xl text-gray-600">Что говорят о нас наши клиенты</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover-scale bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-amber-700" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-amber-900">{review.name}</CardTitle>
                      <CardDescription>{review.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{review.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-20 bg-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-xl text-amber-100 mb-8">
                Готовы ответить на все ваши вопросы и помочь с выбором идеальной кожи для ваших проектов
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-800 p-3 rounded-full">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Телефон</p>
                    <p className="text-amber-100">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-800 p-3 rounded-full">
                    <Icon name="Mail" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-amber-100">info@leatherstore.ru</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-800 p-3 rounded-full">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Адрес</p>
                    <p className="text-amber-100">г. Москва, ул. Кожевническая, д. 15</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-amber-800 p-3 rounded-full">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold">Режим работы</p>
                    <p className="text-amber-100">Пн-Пт: 9:00-18:00, Сб: 10:00-16:00</p>
                  </div>
                </div>
              </div>
            </div>
            
            <Card className="bg-white text-gray-900">
              <CardHeader>
                <CardTitle className="text-amber-900">Оставьте заявку</CardTitle>
                <CardDescription>Мы свяжемся с вами в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Имя</label>
                  <input 
                    type="text" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Ваше имя"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Сообщение</label>
                  <textarea 
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Расскажите о ваших потребностях..."
                  ></textarea>
                </div>
                <Button className="w-full bg-amber-700 hover:bg-amber-800 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-amber-100 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Separator className="mb-8 bg-amber-800" />
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Package" size={24} className="text-amber-300" />
                <span className="text-xl font-bold text-amber-200">LEATHER STORE</span>
              </div>
              <p className="text-amber-200">
                Ваш надежный поставщик высококачественной натуральной кожи для любых проектов.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-amber-200 mb-4">Навигация</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-amber-300 transition-colors">Главная</a></li>
                <li><a href="#about" className="hover:text-amber-300 transition-colors">О нас</a></li>
                <li><a href="#products" className="hover:text-amber-300 transition-colors">Товары</a></li>
                <li><a href="#reviews" className="hover:text-amber-300 transition-colors">Отзывы</a></li>
                <li><a href="#contacts" className="hover:text-amber-300 transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-amber-200 mb-4">Социальные сети</h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="ghost" className="text-amber-100 hover:text-amber-300 hover:bg-amber-800">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-amber-100 hover:text-amber-300 hover:bg-amber-800">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button size="sm" variant="ghost" className="text-amber-100 hover:text-amber-300 hover:bg-amber-800">
                  <Icon name="MessageCircle" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-amber-800" />
          <div className="text-center text-amber-200">
            <p>&copy; 2024 Leather Store. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;