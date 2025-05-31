import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const NichesSection = () => {
  const niches = [
    {
      icon: "🏠",
      title: "Недвижимость",
      description:
        "Виртуальные туры по квартирам, домам и коммерческим объектам. Покупатели исследуют каждый уголок не выходя из дома.",
      examples: [
        "3D-туры по ЖК",
        "Виртуальные квартиры",
        "Планировки в объёме",
      ],
      color: "bg-blue-500",
    },
    {
      icon: "🏛️",
      title: "Архитектура",
      description:
        "Демонстрация архитектурных проектов в полном объёме. Клиенты видят будущие здания до начала строительства.",
      examples: [
        "Концепт-презентации",
        "Визуализация проектов",
        "Интерактивные макеты",
      ],
      color: "bg-green-500",
    },
    {
      icon: "✨",
      title: "Дизайн интерьера",
      description:
        "Погружение в дизайнерские решения. Заказчики пробуют разные варианты отделки и мебели в реальном времени.",
      examples: ["Виртуальная примерка", "3D-планировки", "Каталоги мебели"],
      color: "bg-purple-500",
    },
    {
      icon: "🌍",
      title: "Туризм",
      description:
        "Виртуальные экскурсии по отелям, музеям, достопримечательностям. Туристы выбирают места заранее.",
      examples: ["Туры по отелям", "Музейные экспозиции", "Исторические места"],
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Индустрии будущего
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            3D-технологии трансформируют ключевые отрасли, создавая новые
            стандарты клиентского опыта и эффективности продаж
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {niches.map((niche, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden"
            >
              <div
                className={`h-2 ${niche.color} transition-all duration-300 group-hover:h-3`}
              ></div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{niche.icon}</div>
                  <CardTitle className="text-2xl font-semibold text-gray-900">
                    {niche.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-600 text-lg leading-relaxed">
                  {niche.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Возможности:
                  </h4>
                  <div className="space-y-2">
                    {niche.examples.map((example, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="text-gray-700">{example}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Industry stats */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">
            Рынок 3D-технологий растёт
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">$31.5B</div>
              <p className="text-purple-100">Объём рынка 3D-графики к 2026</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">23%</div>
              <p className="text-purple-100">Годовой рост индустрии</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">67%</div>
              <p className="text-purple-100">Компаний планируют внедрение</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">2025</div>
              <p className="text-purple-100">Год массового перехода</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NichesSection;
