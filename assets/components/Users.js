import React, {Component} from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { offset: 0, data: [], perPage: 2, currentPage: 0, loading: true};
        this.handlePageClick = this.handlePageClick.bind(this);
    }

    componentDidMount() {
        this.getUsers();
    }

    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.getUsers()
        });

    };

    getUsers() {
        axios.get('http://localhost:8000/api/users').then(users => {
            const data = users.data;
            const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage);
            const userData = slice.map(user =>
                    <div className="col-md-10 offset-md-1 row-block" key={user.id}>
                        <ul id="sortable">
                            <li>
                                <div className="media">
                                    <div className="media-left align-self-center">
                                        <img className="rounded-circle"
                                             src={user.imageURL}/>
                                    </div>
                                    <div className="media-body">
                                        <h4>{user.name}</h4>
                                        <p>{user.description}</p>
                                    </div>
                                    <div className="media-right align-self-center">
                                        <a href="#" className="btn btn-default">Contact Now</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
            );
            this.setState({ pageCount: Math.ceil(data.length / this.state.perPage), userData, loading: false})
        })
    }

    render() {
        const loading = this.state.loading;

        return(
            <div>
                <section className="row-section">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center"><span>List of users</span>Created by Mesbah <i
                                className="fa fa-envelope" aria-hidden="true"></i> </h2>
                        </div>
                        {loading ? (
                            <div className={'row text-center'}>
                                <span className="fa fa-spin fa-spinner fa-4x"></span>
                            </div>
                        ) : (
                            <div className={'row'}>
                                {this.state.userData}
                                <ReactPaginate
                                    previousLabel={"<"}
                                    nextLabel={">"}
                                    breakLabel={"..."}
                                    breakClassName={"break-me"}
                                    pageCount={this.state.pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={this.handlePageClick}
                                    containerClassName={"pagination"}
                                    subContainerClassName={"pages pagination"}
                                    activeClassName={"active"}/>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        )
    }
}
export default Users;
