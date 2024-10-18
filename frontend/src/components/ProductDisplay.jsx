import star_icon  from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";

const ProductDisplay = (props) => {
  const { product } = props;
  return (
    <div className="flex w-[70%] mx-auto my-5">
      <div className="flex-1 flex gap-3">
        {/* left */}
        <div className="flex flex-col gap-3 w-[100px]">
          <img className='' src={product.image} alt="" />
          <img className='' src={product.image} alt="" />
          <img className='' src={product.image} alt="" />
          <img className='' src={product.image} alt="" />
        </div>
        <div className="">
          <img src={product.image} alt="" />
        </div>
      </div>

      <div className="flex-1 flex flex-col ml-4 my-5 gap-2">
        {/* right    */}
        <h1 className="text-2xl font-semibold">{product.name}</h1>
        <div className="flex text-xs items-center mt-2 gap-1">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p className="pl-2 text-slate-600 text-xs">122</p>
        </div>
        <div className="flex mx-5 gap-5 text-xl font-normal">
          <div className="text-slate-400 line-through">${product.old_price}</div>
          <div className="text-red-500">${product.new_price}</div>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti
          nesciunt maxime nemo adipisci laborum doloremque eveniet voluptate
          excepturi aspernatur!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti
          nesciunt maxime nemo adipisci laborum doloremque eveniet oluptate
          excepturi aspernatur!
        </div>
        <div className="flex">
            <h1 className="text-slate-500 text-xl font-normal">Select Size:</h1>
            <div className="flex mx-5 gap-8">
                <div className="text-xs text-slate-500 hover:bg-slate-100 border border-solid border-slate-300 cursor-pointer rounded-md px-1 py-1">XS</div>
                <div className="text-xs text-slate-500 hover:bg-slate-100 border border-solid border-slate-300 cursor-pointer rounded-md px-1 py-1">S</div>
                <div className="text-xs text-slate-500 hover:bg-slate-100 border border-solid border-slate-300 cursor-pointer rounded-md px-1 py-1">M</div>
                <div className="text-xs text-slate-500 hover:bg-slate-100 border border-solid border-slate-300 cursor-pointer rounded-md px-1 py-1">L</div>
                <div className="text-xs text-slate-500 hover:bg-slate-100 border border-solid border-slate-300 cursor-pointer rounded-md px-1 py-1">XL</div>
            </div>
        </div>
        <button className="bg-red-400 text-xl text-white rounded-md p-2 hover:bg-slate-200 hover:text-red-400">Add to cart</button>
        <p className="font-semibold">Categoty :<span className="text-sm font-normal">Women T-shhirt</span></p>
        <p className="font-semibold">Tags :<span className="text-sm font-normal">Women T-shhirt</span></p>
      </div>
    </div>
  );
};

export default ProductDisplay;
