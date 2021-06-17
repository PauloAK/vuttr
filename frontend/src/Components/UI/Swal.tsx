import { default as SwalPackage, SweetAlertIcon } from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const swal = withReactContent(SwalPackage);

interface ISwal {
    showSwal: (type: SweetAlertIcon, text: string, title: string, cb?: () => {}) => void,
    showToast: (type: SweetAlertIcon, text: string) => void
}

const Swal : ISwal = {
    showSwal: (type: SweetAlertIcon, text: string, title: string, cb?: () => {}) => {
        swal.fire({
            html: text,
            title: title,
            icon: type
        }).then(async (confirm) => {
            if (!confirm.isConfirmed)
                return;
            if (cb) cb();
        });
    },
    showToast: (type: SweetAlertIcon, text: string) => {
        const Toast = SwalPackage.mixin({
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            backdrop: false,
            didOpen: (toast) => {
                toast.addEventListener('mouseenter', SwalPackage.stopTimer)
                toast.addEventListener('mouseleave', SwalPackage.resumeTimer)
                toast.addEventListener('click', (e : any) => { SwalPackage.close(e) })
            }
        })
        
        Toast.fire({
            icon: type,
            title: text
        });
    }
};

export default Swal;