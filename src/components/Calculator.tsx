export default function Calculator() {
  return (
    <>
      <div className="bg-[#1f1f1f] flex justify-center items-center h-screen">
        <article className="w-[282px] border border-solid border-[#333] bg-[#ccc] p-[4px]">
          <form className="grid grid-cols-[repeat(4,65px)] auto-rows-[65px] gap-[4px]">
            <input type="text" name="output" className="bg-white input col-span-4 text-right px-[10px]" readOnly/>
            <input type="button" className="bg-[red] col-span-3 input" value="C"/>
            <input type="button" className="bg-[orange] input" value="/"/>
            <input type="button" className="bg-white input" value="1"/>
            <input type="button" className="bg-white input" value="2"/>
            <input type="button" className="bg-white input" value="3"/>
            <input type="button" className="bg-[orange] input" value="*"/>
            <input type="button" className="bg-white input" value="4"/>
            <input type="button" className="bg-white input" value="5"/>
            <input type="button" className="bg-white input" value="6"/>
            <input type="button" className="bg-[orange] input" value="+"/>
            <input type="button" className="bg-white input" value="7"/>
            <input type="button" className="bg-white input" value="8"/>
            <input type="button" className="bg-white input" value="9"/>
            <input type="button" className="bg-[orange] input" value="-"/>
            <input type="button" className="bg-[green] input" value="."/>
            <input type="button" className="bg-white input" value="0"/>
            <input type="button" className="bg-[orange] col-span-2 input" value="="/>
          </form>
        </article>
      </div>
    </>
  );
};