import { Destination, ItineraryDay, UserPreferences } from '../types/travel';

export function generatePersonalizedItinerary(
  destination: Destination,
  preferences: UserPreferences
): ItineraryDay[] {
  const daysCount = Math.max(1, Math.min(14, preferences.days || 3));
  const style = preferences.travelStyle || 'A cultural chapter';
  const group = preferences.groupType || 'Solo';
  const budget = preferences.budget || 'Moderate';
  const spots = destination.touristSpots || [];
  const foodDishes = destination.food.dishes || [];
  const experiences = destination.experiences || [];

  const days: ItineraryDay[] = [];

  const dayThemes: Record<number, string> = {
    1: 'Arrival, First Impressions & Twilight Magic',
    2: 'Sacred Heart & Cultural Foundations',
    3: 'Artisan Alleys, Flavors & Living Heritage',
    4: 'Wilderness, Scenic Overlooks & Fresh Air',
    5: 'Hidden Sanctuaries & Lesser-Known Gems',
    6: 'Thrills, Active Exploration & Open Horizons',
    7: 'Sensory Markets, Crafts & Quiet Retreats',
    8: 'Local Neighborhood Life & Culinary Stories',
    9: 'Serenity, Reflection & Rejuvenating Rest',
    10: 'The Grand Farewell & Unforgettable Memories'
  };

  for (let i = 1; i <= daysCount; i++) {
    const spotA = spots[(i * 2 - 2) % Math.max(1, spots.length)] || {
      name: `${destination.name} Heritage Quarter`,
      description: `Wander through the historic avenues, taking in architecture and morning atmosphere.`,
      approxCost: budget === 'Budget' ? 'Free' : '$10 - $20',
      location: 'Central District'
    };

    const spotB = spots[(i * 2 - 1) % Math.max(1, spots.length)] || {
      name: `${destination.name} Scenic Lookout & Promenade`,
      description: `Absorb panoramic viewpoints as late afternoon golden light bathes the landmarks.`,
      approxCost: 'Free',
      location: 'Panoramic Ridge'
    };

    const dish = foodDishes[(i - 1) % Math.max(1, foodDishes.length)] || {
      name: `Authentic regional specialty of ${destination.name}`,
      whereToTry: 'Locally cherished family bistro'
    };

    const exp = experiences[(i - 1) % Math.max(1, experiences.length)] || {
      title: `${style} Immersive Discovery Experience`,
      description: `Participate in a guided local exploration tailored for ${group.toLowerCase()} travelers.`,
      highlight: `Connect with local residents and discover authentic neighborhood traditions.`
    };

    let theme = dayThemes[i] || `Day ${i}: Exploring ${destination.name}`;
    if (i === 1 && daysCount === 1) {
      theme = 'The Complete 1-Day Essence of ' + destination.name;
    }

    days.push({
      day: i,
      theme,
      morning: {
        time: '8:30 AM',
        title: `Morning Exploration at ${spotA.name}`,
        description: spotA.description,
        cost: spotA.approxCost || (budget === 'Budget' ? 'Free' : '$15'),
        highlight: `Best in morning light before peak crowds; perfect for ${group.toLowerCase()} travelers.`,
        location: spotA.location,
        category: spotA.category || 'Culture'
      },
      afternoon: {
        time: '1:00 PM',
        title: `Lunch & Cultural Experience: ${exp.title}`,
        description: `${exp.description} Afterwards, sample ${dish.name} at ${dish.whereToTry}.`,
        cost: exp.cost || (budget === 'Budget' ? '$10' : '$35'),
        highlight: exp.highlight || 'Deep dive into local traditions.',
        location: destination.region,
        category: 'Experience'
      },
      evening: {
        time: '6:00 PM',
        title: `Golden Hour Sunset at ${spotB.name} & Dinner`,
        description: `Conclude the day at ${spotB.name}. Enjoy the gentle twilight breezes followed by a memorable dinner celebrating ${destination.name}'s evening culinary scene.`,
        cost: budget === 'Luxury' ? '$85+' : budget === 'Premium' ? '$45' : '$18',
        highlight: `Twilight photography vantage point and relaxing dinner ambiance.`,
        location: spotB.location,
        category: 'Scenic'
      },
      localFoodTip: `Today's culinary highlight: don't miss ${dish.name}. Look for busy local stalls or heritage bistros where residents dine.`,
      culturalNote: destination.culture.customs[(i - 1) % Math.max(1, destination.culture.customs.length)] ||
        `Remember to greet vendors warmly and take time to appreciate the craftsmanship of this historic place.`
    });
  }

  return days;
}
