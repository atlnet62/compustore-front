import style from './style.module.css';

function Button({isDisabled, loadStyle, onClickHandler, children }){

    return (
        <button className={`${(loadStyle) === 'btn-del' ? style.btnDel : (loadStyle) === 'btn-edit' ? style.btnEdit : (loadStyle) === 'btn-add' ? style.btnAdd : style.btn}`} disabled={isDisabled} onClick={onClickHandler}>{children}</button>
    )
}

export default Button;