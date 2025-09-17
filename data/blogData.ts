export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  author: string;
  date: string;
  content: string[];
}

export const blogPosts: BlogPost[] = [
    {
    id: 1,
    slug: 'ultimate-guide-to-building-lean-muscle',
    title: 'The Ultimate Guide to Building Lean Muscle',
    excerpt: 'Discover the key principles of nutrition and training to effectively build muscle mass.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    author: 'Alex Carter',
    date: 'October 26, 2023',
    content: [
      'Building lean muscle is a goal for many fitness enthusiasts, but it requires a strategic approach that combines proper nutrition, effective training, and adequate recovery. It’s not just about lifting heavy weights; it’s about creating an environment where your muscles can repair and grow stronger.',
      'Nutrition plays a pivotal role. A caloric surplus is necessary, meaning you need to consume more calories than your body burns. However, the quality of these calories matters. Prioritize lean protein sources like chicken, fish, tofu, and legumes, as they provide the essential amino acids needed for muscle repair. Aim for about 1.6-2.2 grams of protein per kilogram of body weight. Complex carbohydrates like oats, brown rice, and sweet potatoes will fuel your workouts, while healthy fats from avocados and nuts support hormone production.',
      'Your training regimen should focus on progressive overload. This principle states that you must continually increase the demands on your musculoskeletal system to gain muscle size, strength, and endurance. You can achieve this by gradually increasing the weight you lift, the number of repetitions or sets you perform, or by decreasing rest times between sets. Compound exercises like squats, deadlifts, and bench presses are highly effective as they work multiple muscle groups simultaneously.',
    ],
  },
  {
    id: 2,
    slug: '5-common-cardio-mistakes-to-avoid',
    title: '5 Common Cardio Mistakes to Avoid',
    excerpt: 'Are you getting the most out of your cardio sessions? Avoid these common pitfalls.',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
    author: 'Jessica Knight',
    date: 'October 22, 2023',
    content: [
      'Cardiovascular exercise is a cornerstone of a healthy lifestyle, but many people make common mistakes that limit their effectiveness. The first mistake is performing cardio on an empty stomach, believing it burns more fat. While it might burn a slightly higher percentage of fat for fuel, it can also lead to muscle loss and a less intense workout. It’s better to have a small, easily digestible snack beforehand.',
      'Secondly, sticking to the same routine day after day can lead to a plateau. Your body is incredibly adaptive, so it’s crucial to vary your workouts. Mix up the type of machine you use, the intensity, and the duration. High-Intensity Interval Training (HIIT) is an excellent way to challenge your cardiovascular system and burn more calories in less time.',
      'Another common pitfall is neglecting resistance training. While cardio is great for your heart, strength training is what builds and maintains muscle mass, which in turn boosts your metabolism. A balanced routine that includes both is optimal for overall health and body composition.',
    ],
  },
  {
    id: 3,
    slug: 'why-recovery-is-as-important-as-your-workout',
    title: 'Why Recovery is Just as Important as Your Workout',
    excerpt: 'Learn how proper rest, sleep, and nutrition can amplify your fitness results.',
    image: 'https://images.unsplash.com/photo-1477332552946-cfb384aeaf1c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    author: 'Dr. Sarah Evans',
    date: 'October 18, 2023',
    content: [
      'The work you do in the gym is only half the equation. The magic of adaptation—getting stronger, faster, and fitter—happens during periods of recovery. Without adequate rest, you risk overtraining, injury, and burnout. Sleep is the most critical component of recovery. During deep sleep, your body releases growth hormone, which is essential for repairing damaged muscle tissue.',
      'Active recovery can also be beneficial. This involves low-intensity activities like walking, stretching, or light yoga on your rest days. It helps increase blood flow to the muscles, which can reduce soreness and speed up the repair process. Finally, proper hydration and nutrition post-workout are non-negotiable. Consuming a meal rich in protein and carbohydrates within a couple of hours after training will replenish your glycogen stores and provide the building blocks for muscle growth.',
    ],
  },
];