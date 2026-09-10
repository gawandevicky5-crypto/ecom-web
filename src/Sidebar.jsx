function Sidebar({
  categories,
  category,
  setCategory,
}) {
  return (
    <aside className="sidebar">

      <h2>Categories</h2>

      <button type="button" onClick={() => setCategory("all")}>
        All Products
      </button>

      {categories.map((item) => (
        <button type="button" key={item.slug} onClick={() => setCategory(item.slug)}>
          {item.name}
        </button>
      ))}

    </aside>
  );
}

export default Sidebar;
