
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="4"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            Начните сейчас
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            Получите 3D-сайт, который увеличит ваши продажи и сделает бизнес незабываемым. 
            Первая консультация — бесплатно.
          </p>
        </div>
        
        {/* Contact options */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-semibold mb-4">Бесплатная консультация</h3>
              <p className="text-gray-300 mb-6">
                Обсудим ваш проект, покажем примеры, составим план разработки
              </p>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 w-full">
                Записаться на консультацию
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
            <CardContent className="p-8 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-2xl font-semibold mb-4">Экспресс-предложение</h3>
              <p className="text-gray-300 mb-6">
                Пришлите описание проекта — получите расчёт стоимости за 1 час
              </p>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 w-full">
                Получить расчёт
              </Button>
            </CardContent>
          </Card>
        </div>
        
        {/* Process steps */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-center mb-8">Как мы работаем</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="font-semibold mb-2">Анализ проекта</h4>
              <p className="text-sm text-gray-300">Изучаем ваши цели и целевую аудиторию</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="font-semibold mb-2">3D-концепт</h4>
              <p className="text-sm text-gray-300">Создаём интерактивный прототип</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="font-semibold mb-2">Разработка</h4>
              <p className="text-sm text-gray-300">Программируем полнофункциональный сайт</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h4 className="font-semibold mb-2">Запуск</h4>
              <p className="text-sm text-gray-300">Публикуем и настраиваем аналитику</p>
            </div>
          </div>
        </div>
        
        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Готовы произвести впечатление на ваших клиентов?</p>
          <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-12 py-4 text-lg font-semibold rounded-full">
            Создать 3D-сайт
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
