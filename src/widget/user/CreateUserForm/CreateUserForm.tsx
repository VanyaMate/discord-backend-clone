'use client';

import React, { useState } from 'react';


export type CreateUserFormProps = {};

const CreateUserForm: React.FC<CreateUserFormProps> = (props) => {
    const {}                  = props;
    const [ email, setEmail ] = useState<string>('');

    return (
        <div>
            <input
                type={ 'email' }
                value={ email }
                onChange={ (event) => setEmail(event.target.value) }
                placeholder={ 'email' }
            />
            <button
                onClick={ () => fetch('/api/user', {
                    method: 'POST', body: JSON.stringify({ email }),
                }) }
                disabled={ email.trim() === '' }
            >
                create
            </button>
        </div>
    );
};

export default React.memo(CreateUserForm);