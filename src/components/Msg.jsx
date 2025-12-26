import React from "react";

const Msg = () => {
  return (
    <div>
      <section className="max-w-[1200px] mx-auto px-6 py-24 text-[#1F2937]">
        <h2 className="text-3xl font-bold mb-6">Implementation Notes</h2>

        <ul className="space-y-4 text-lg leading-relaxed">
          <li>
            • Scope was intentionally focused on the most complex, user-facing
            parts of the design.
          </li>
          <li>
            • Responsive layout adapts spacing, scaling, and blur behavior for
            mobile devices.
          </li>
          <li>
            • Performance optimizations include memoized animation components
            and lazy-loaded assets.
          </li>
          <li>
            • Hero and loader were built to match Figma at pixel level on
            desktop.
          </li>
          <li>
            • Custom Framer Motion system powers the document card rotation and
            scan animation.
          </li>
          <li>
            • Shared layout animation is used to morph the logo from loader to
            navbar.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Msg;
