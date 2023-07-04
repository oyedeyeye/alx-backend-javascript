export default function getListStudents() {
  const names = ['Guillaume', 'James', 'Serena'];
  const ids = [1, 2, 5];
  const locations = ['San Francisco', 'Columbia', 'San Francisco'];
  const profile = [];

  for (let i = 0; i < ids.length; i += 1) {
    profile.push({
      id: ids[i],
      firstName: names[i],
      location: locations[i],
    });
  }

  return profile;
}
