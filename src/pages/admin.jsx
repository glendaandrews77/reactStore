import './admin.css';

function Admin (){
    return (
        <div className="admin">
            <h1>Store Administration</h1>

            <div className="forms-container">
                <div className="form">
                    <h3>Create Product</h3>

                    <div>
                        <label htmlFor="form-label">Title</label>
                        <input type="text" className="form-control"/>   
                    </div>
                    <div>
                        <label htmlFor="form-label">Category</label>
                        <input type="text" className="form-control"/>   
                    </div>
                    <div>
                        <label htmlFor="form-label">Image</label>
                        <input type="text" className="form-control"/>   
                    </div>
                    <div>
                        <label htmlFor="form-label">Price</label>
                        <input type="text" className="form-control"/>   
                    </div>
                </div>

            </div>
            
        </div>
    );
}
export default Admin;