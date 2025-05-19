import { useState } from "react";
import FeaturesMap from "../../middleware/new-customer-account/FeaturesMap";

function FeatureItems() {
  const [items, setItems] = useState(FeaturesMap);
  const [allItems] = useState(FeaturesMap);
  const [selected, setSelected] = useState("All");

  // Optional: Set your preferred category button order
  const customOrder = ["All", "Promotional", "Upsell", "Custom"];

  const filterItems = (category) => {
    setSelected(category);
    if (category === "All") {
      setItems(allItems);
    } else {
      const filtered = allItems.filter((item) => item.category.includes(category));
      setItems(filtered);
    }
  };

  return (
    <div className="container my-3">
      <h1 className="display-6 text-center mb-3 new_secondary_color">
        The complete toolkit to optimize your{" "}
        <span className="new_color">Shopify Customer Accounts</span>
      </h1>
      <h5 className="text-center mb-4 new_secondary_color">
        Turn visitors into loyal customers with an optimized, engaging account dashboard.
      </h5>

      {/* Filter Buttons */}
      <div className="px-md-5 d-flex flex-wrap mb-4 mt-5">
        {customOrder.map((cat, idx) => (
          <button
            key={idx}
            className={`btn filter-btn m-2 px-3 ${
              selected === cat ? "selected-filter" : ""
            }`}
            onClick={() => filterItems(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Feature Cards */}
      <div className="row px-md-5">
        {items.map((item) => (
          <div
            key={item.id}
            className="col-md-4 col-sm-6 mb-4 d-flex featur-top align-items-stretch"
          >
            <div className="card w-100">
              <img
                src={item.img_url}
                alt={item.title}
                className="card-img-top"
                style={{ objectFit: "cover" }}
              />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title">{item.title}</h5>
                  {/* {item.version === "CLASSIC" && (
                    <div className="item-badge">Legacy</div>
                  )} */}
                </div>
                <p className="card-text">{item.subtitle}</p>
                {item.url ? <div className="py-3">
                  <a className="feature-manage-btn" href={item.url}>
                    View more
                  </a>
                </div> : null}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeatureItems;
