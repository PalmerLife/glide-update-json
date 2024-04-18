window.function = function (baseJSON, updatesJSON) {
  // Parse JSON input strings to objects
  const base = JSON.parse(baseJSON.value || '[]');
  const updates = JSON.parse(updatesJSON.value || '[]');

  // Create a map from the updates array for quick access
  const updatesMap = new Map(updates.map(item => [item.id, item]));

  // Merge base array with updates
  const merged = base.map(item => {
    return updatesMap.has(item.id) ? {...item, ...updatesMap.get(item.id)} : item;
  });

  // Convert the merged result back to a JSON string
  return JSON.stringify(merged);
}
