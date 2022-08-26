import { useState } from "react";

export default function FooterLinkList({ title, listArr }) {
  const [displayList, setDisplayList] = useState(false);
  return (
    <div>
      <h2 class="header-footer">
        <span>{title}</span>{" "}
        <button onClick={() => setDisplayList(!displayList)}>
          {displayList ? (
            <i class="ri-subtract-line"></i>
          ) : (
            <i class="ri-add-line"></i>
          )}
        </button>
      </h2>
      <ul className={`footer-link-list ${displayList && "list-display"}`}>
        {listArr.map((link, index) => {
          return <li key={index}>{link}</li>;
        })}
      </ul>
    </div>
  );
}
