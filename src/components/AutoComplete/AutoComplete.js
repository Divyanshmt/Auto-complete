import React, { Component } from 'react'
import './AutoComplete.css';
import Chip from '../Chip/Chip';
import userService from '../../api/user-service';
import Suggestion from '../Suggestion/Suggestion';


export class AutoComplete extends Component {
    constructor() {
        super()
        this.state = {
            userList: [],
            search: '',
            selectedUserList: [],
            hideSuggestionList: true
        }

        this.searchInputRef = React.createRef();

    }

    async componentDidMount() {
        const data = await userService.getUsers();
        this.updateUserList(data)
    }

    get filteredList() {
        return this.state.userList
            .filter((user) => this.state.selectedUserList.findIndex(u => u.id === user.id) === -1)
            .filter((user) => user.name.toLowerCase().match(this.state.search.toLowerCase()))
    }

    updateUserList = (userList) => {
        this.setState({
            userList
        })
    }

    updateSearch = (e) => {
        this.setState({
            search: e.target.value,
        })
    }

    toggleList(toggle) {
        return () => {
            if (!toggle) {
                this.searchInputRef.current.focus()
            }
            this.setState({
                hideSuggestionList: toggle
            })
        }
    }

    _addChips = (e, user) => {
        const { userList, selectedUserList } = this.state
        this.setState({
            selectedUserList: [...selectedUserList, userList.find(u => u.id === user.id)],
            hideSuggestionList: true,
            search: ''
        });
        this.searchInputRef.current.blur();
    }

    _deleteChip = (e, user) => {
        e.stopPropagation();

        const { selectedUserList } = this.state
        this.setState({
            selectedUserList: selectedUserList.filter(u => u.id !== user.id),
            hideSuggestionList: true,
            search: ''
        });

        this.searchInputRef.current.blur();
    }

    render() {
        return (
            <div className={["auto-complete-container", !this.state.hideSuggestionList ? 'focus' : ''].join(' ')} >
                {this.state.selectedUserList.map((user, i) => <Chip key={i} onClose={this._deleteChip} user={user}></Chip>)}

                <div tabIndex="0" onFocus={this.toggleList(false)} className="input-container">
                    <input placeholder="Search..." ref={this.searchInputRef} type="text" className="search-input" onChange={this.updateSearch} value={this.state.search} />

                    {!this.state.hideSuggestionList &&
                        <div tabIndex="0" onFocus={this.toggleList(false)} onBlur={this.toggleList(true)} className="suggestion-list">
                            {this.filteredList.map(user => <Suggestion key={user.id} onClick={this._addChips} user={user}></Suggestion>)}
                        </div>
                    }
                </div>
            </div>

        )
    }
}

export default AutoComplete
