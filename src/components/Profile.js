import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return(
        <div className="container profile">
            <User
                src="https://lh3.googleusercontent.com/mH598wWAzVDAkJH4csek9kZrYBRUZEtlD7MLjhvhi3i7WJMmfiyBkEJb_KkfZpx6PeXtag=s85"
                alt="man"
                name="Oleg"
                />
            <Palette/>
        </div>
    )
}
export default Profile;