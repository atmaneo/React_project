export const Modal = () => {
    return (
        
        <div>
            <div className="text-red-500">
                Hello
            </div>

        {/* The button to open modal */}
        <label htmlFor="my-modal" className="btn">open modal</label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
        <div className="modal-box">
            <h3 className="font-bold text-lg">créer un composant Modal.tsx à partir d’un des exemples de daisyUi</h3>
            <div className="modal-action">
            <label htmlFor="my-modal" className="btn">OK</label>
            </div>
        </div>
        </div>
        </div>
        
    );
   };