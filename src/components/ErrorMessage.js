import React, {Fragment} from 'react';

const ErrorMessage = props => {
    return (
        <Fragment>
            <p>Oops! Something went wrong. Try reloading again or show the next message to some developer:</p>
            <p>{props.error.data}</p>
            <p>Url fetched:</p>
            <p>{props.error.config.url}</p>
        </Fragment>
    );
};

export default ErrorMessage;


/**
 * PER RENDERITZAR NOMÉS UN COMPONENT: MIRAR EXPENSLIST.JS DE ANDREW
 * 
 * 
 * <div>
        {
            props.expenses.length === 0 ? (
                <p>No expenses provided</p>
            ) : (
                    props.expenses.map((expense) => (
                        <ExpenseListItem {...expense} key={expense.id} />
                    ))
                )
        }
    </div>
 * 
 * 
 */