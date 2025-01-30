import bg from "../assets/bg.jpg";

export default function PhoneView() {
  return (
    <div className="mockup-phone hidden md:block border-primary h-[600px] min-w-[300px] max-w-[300px]">
      <div className="mockup-phone-camera w-[100px]"></div>
      <div className="mockup-phone-display w-full h-full">
        <img alt="wallpaper" src={bg}></img>
      </div>
    </div>
  );
}
