const { default: AddTasks } = require("./AddTask");


function ModifyTasks() {

    return (
        <div className="Parent backgroundimage4 flexcolumn">
            <div className="whitebackground">
                <h1>VIEW TASKS</h1>
                <div>
                    <div className="flexrow">
                        <p className="width150 border">TASK:</p>
                        <p className="width200 border">DESCRIPTION:</p>
                        <p className="width200 border">ASSIGNMENT</p>

                    </div>
                    <div className="flexrow">
                        <p className="width150 border">Hand soaps</p>
                        <p className="width200 border">Check hand soaps</p>
                        <p className="width200 border">Gordon</p>

                    </div>
                    <div className="flexrow">
                        <p className="width150 border">Paper Towels</p>
                        <p className="width200 border">Check paper towels</p>
                        <p className="width200 border">John</p>

                    </div>
                    <div className="flexrow">
                        <p className="width150 border">Pig buckets</p>
                        <p className="width200 border">Set up front</p>
                        <p className="width200 border">Jane</p>

                    </div>
                </div>
                
            </div>
            <AddTasks />
        </div>

    );
}

export default ModifyTasks;