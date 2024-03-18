import React from 'react';
import UserService from '@/services/UserService';
import CreateUserForm from '@/widget/user/CreateUserForm/CreateUserForm';


export type PageProps = {};

const Page: React.FC<PageProps> = async (props) => {
    const {} = props;

    const users = await UserService.getUsers();

    return (
        <div>
            <CreateUserForm/>
            <hr/>
            {
                users.map((user) => (
                    <div key={ user.id }>
                        <h5>user id: { user.id }</h5>
                        <h3>user login: { user.email }</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default React.memo(Page);