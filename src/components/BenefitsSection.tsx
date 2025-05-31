import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: "🎪",
      title: "Эффект «WOW»",
      description:
        "Посетители в восторге от интерактивности и реализма. Первое впечатление решает всё.",
    },
    {
      icon: "💰",
      title: "Рост продаж",
      description:
        "Клиенты лучше понимают продукт, видя его в объёме. Меньше сомнений — больше покупок.",
    },
    {
      icon: "⏱️",
      title: "Экономия времени",
      description:
        "Виртуальные туры заменяют десятки встреч. Клиенты предварительно изучают всё онлайн.",
    },
    {
      icon: "🌐",
      title: "Международный охват",
      description:
        "Показывайте объекты клиентам из любой точки мира без командировок и логистики.",
    },
    {
      icon: "📊",
      title: "Подробная аналитика",
      description:
        "Отслеживайте, какие зоны интересуют клиентов больше всего. Оптимизируйте под их потребности.",
    },
    {
      icon: "🎯",
      title: "Точность восприятия",
      description:
        "Клиенты видят реальные размеры, материалы, освещение. Никаких неприятных сюрпризов.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Почему 3D-сайты побеждают
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Интерактивные виртуальные пространства кардинально меняют способ
            взаимодействия с вашим бизнесом — от простого просмотра к полному
            погружению
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-0 shadow-md"
            >
              <CardHeader className="text-center pb-4">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {benefit.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-center leading-relaxed">
                  {benefit.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats section */}
        <div className="mt-20 bg-white rounded-2xl p-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">
                300%
              </div>
              <p className="text-gray-600">Увеличение конверсии</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">5x</div>
              <p className="text-gray-600">Время на сайте</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
              <p className="text-gray-600">Клиентов запоминают бренд</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
