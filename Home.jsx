
    const Home = () => {
        const productCategories = [
          { name: 'Furniture', icon: '🛋️' },
          { name: 'Electronics', icon: '📱' },
          { name: 'Appliances', icon: '📸' },
          { name: 'Fashion', icon: '👗' },
          { name: 'Books', icon: '📚' },
          { name: 'Toys', icon: '🧸' },
        ];
  return (<>
    <div>
       <section className="hero">
              <h1>Welcome to ShopKar</h1>
              <p>Discover amazing products with great deals and seamless shopping experience.</p>
              <a href="#products" className="main-btn">Shop Now</a>
          </section>
      
    </div>
    <section className="categories">
      <div className="catContent">
        <h2>🔍 Explore by Category 📝</h2>
        <p>Find top deals and best quality products across all categories.</p>
        <div className="categories-grid">
          {productCategories.map((proCt, index) => (
            <div className="category-card" key={index}>
              <div className="category-icon">{proCt.icon}</div>
              <div className="category-name">{proCt.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Home
