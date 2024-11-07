const categoryFilter = (data, category) => {
  if (!category || category === "all") return data;

  const newData = data.filter((item) => item.category === category);
  return newData;
};

const searchFilter = (data, search) => {
  if (!search) return data;

  const newData = data.filter((item) => item.postTitle.includes(search));
  return newData;
};

export { categoryFilter, searchFilter };
