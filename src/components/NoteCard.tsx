export function NoteCard() {
    return (
        <div className="rounded-md bg-slate-800 p-5 space-y-3 overflow-hidden relative">
          <span className="text-sm font-medium text-slate-300">Há 2 dias</span>
          <p className="text-sm leading-6 text-slate-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae ipsa vero et excepturi tempora fuga neque, consequatur fugit adipisci nemo, repellat id rerum maxime nulla incidunt aliquam recusandae porro voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat natus ipsam dolores, omnis ipsa eum quas eveniet tempora cumque accusantium nam saepe architecto unde provident molestias excepturi, fuga neque eaque!
          </p>

          <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/60 to-black/0 pointer-events-none"></div>
        </div>
    );
}