

function CurrentEmployees() {

    return (
        <div className="Parent backgroundimage flexcolumn ">
            <div className="whitebackground">
                <h1>EMPLOYEE LIST</h1>
                <div>
                    <div className="flexrow">
                        <p className="width50 border">ID:</p>
                        <p className="width100 border">LAST NAME:</p>
                        <p className="width100 border">FIRST NAME:</p>
                        <p className="width100 border">POSITION:</p>
                    </div>
                    <div className="flexrow">
                        <p className="width50 border">123</p>
                        <p className="width100 border">Ramsey</p>
                        <p className="width100 border">Gordon</p>
                        <p className="width100 border">Cook</p>
                    </div>
                    <div className="flexrow">
                        <p className="width50 border">423</p>
                        <p className="width100 border">Smith</p>
                        <p className="width100 border">Jane</p>
                        <p className="width100 border">Waitress</p>
                    </div>
                    <div className="flexrow">
                        <p className="width50 border">555</p>
                        <p className="width100 border">Doe</p>
                        <p className="width100 border">John</p>
                        <p className="width100 border">Waiter</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CurrentEmployees;