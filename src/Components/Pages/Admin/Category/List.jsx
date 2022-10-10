import React from "react";

function List({ categories }) {


    
    return (
        <main id="category">
            <h2>Category List</h2>
            <section>
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Title</td>
                            <td colSpan="2">Actions</td>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category) => {
                            return (
                                <React.Fragment key={category.categoryID}>
                                    <tr>
                                        <td>{category.categoryID}</td>
                                        <td>{category.title}</td>
                                        <td>edit</td>
                                        <td>del</td>
                                    </tr>
                                </React.Fragment>
                            );
                        })}
                    </tbody>
                </table>
            </section>
        </main>
    );
}

export default List;