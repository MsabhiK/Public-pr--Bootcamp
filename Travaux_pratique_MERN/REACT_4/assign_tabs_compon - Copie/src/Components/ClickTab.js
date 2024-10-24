import react, {useState} from 'react';

const ClickTab = (props) => {
    const [tabs1, setTabs1] = useState("");
    const [tabs2, setTabs2] = useState("");
    const [tabs3, setTabs3] = useState("");

    const handleTab1 = (e) => {
        e.preventDefault();
        setTabs1("Tab 1: Learning MERN at Coding Dojo africa");
        setTabs2("");
        setTabs3("");
    }
    const handleTab2 = (e) => {
        e.preventDefault();
        setTabs1("");
        setTabs2("Tab 2: Learning PYTHON at Coding Dojo africa");
        setTabs3("");
    }
    const handleTab3 = (e) => {
        e.preventDefault();
        setTabs1("");
        setTabs2("");
        setTabs3("Tab 3: Learning JAVA at Coding Dojo africa");
    }
    
    return (
        <div className="container mt-5">
            <h3 className="text-center bg-light col-5">Coding Dojo Africa - Clickable Tabs</h3>
            <div className="btn-toolbar mt-3" role="toolbar" aria-label="Toolbar with button groups">
                <div className="btn-group me-2" role="group" aria-label="First group">
                    <button type="button" class="btn btn-primary" onClick={handleTab1}>TAB 1</button>
                </div>
                <div className="btn-group me-2" role="group" aria-label="Second group">
                    <button type="button" class="btn btn-danger" onClick={handleTab2}>TAB 2</button>
                </div>
                <div className="btn-group" role="group" aria-label="Third group">
                    <button type="button" class="btn btn-success" onClick={handleTab3}>TAB 3</button>
                </div>
            </div>
            <div className="card border-warning bg-light mt-3 col-5">
                <div className="card-body">
                    <p className="fs-4 text-primary">{tabs1}</p>
                    <p className="fs-4 text-danger">{tabs2}</p>
                    <p className="fs-4 text-success">{tabs3}</p>
                </div>
            </div>
        </div>
        
    );
}

export default ClickTab;