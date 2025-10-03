import React from "react";

export default function Products({ product }) {
  return (
    <div className="hidden max-h-[1190px] md:flex flex-col items-center gap-5 border-[2.25px] border-[#40CEEC] rounded-2xl overflow-y-auto p-5 custom-scrollbar">
      {product?.media.length > 0 ? (
        product?.media.map((item) => {
          return (
            <>
              {item?.type == "image" && (
                <img
                  src={item.url ?? "/assets/jpg/no-image.jpg"}
                  alt=""
                  width={310}
                  height={310}
                  className="p-5"
                />
              )}
            </>
          );
        })
      ) : (
        <div className="flex-1 flex items-center justify-center  relative">
          <img
            src="/assets/jpg/no-image.jpg"
            alt=""
            width={400}
            height={400}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      )}
    </div>
  );
}
