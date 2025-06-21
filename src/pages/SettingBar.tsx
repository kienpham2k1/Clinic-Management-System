import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import * as SettingSelector from '../store/selector'
import { AppDispatch } from '../store';
import { themeSchemeDirection } from '../features/setting/settingSlice';
function SettingBar() {
    const [show, setShow] = useState(false);
    const _themeSchemeDirection = useSelector(
        SettingSelector.themeSchemeDirection
    );
    const dispatch = useDispatch<AppDispatch>();
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Button variant="primary" onClick={handleShow} className="me-2">
                {'Open Setting'}
            </Button>
            <Button variant="primary" onClick={() => { dispatch(themeSchemeDirection()) }} className="me-2">
                {'Change to rtl'}
            </Button>
            <Offcanvas
                show={show}
                onHide={handleClose}
                placement={`${_themeSchemeDirection ? "start" : "end"}`}
                backdrop={true}
                scroll={true}
                className="live-customizer">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Setting</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>{"Scheme"}</div>
                    <div>Select Layouts</div>
                    <div>Sidebar color</div>
                    <div>Sidebar type</div>
                    <div>Sidebar Active Style</div>
                    <div>Navbar Style</div>
                    <div>Navbar color</div>
                    <div>Theme color</div>
                </Offcanvas.Body>
            </Offcanvas >
        </>
    );
}



export default SettingBar;