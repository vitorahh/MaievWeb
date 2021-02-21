import Swal from 'sweetalert2';

export function AlertError(Title:string) {
    Swal.fire({
        icon: 'error',
        title: Title,
        showConfirmButton: false
    });
}

export function AlertSuccess(Title:string) {
    Swal.fire({
        icon: 'success',
        title: Title,
        showConfirmButton: false,
        timer: 2000
    });
}

export function AlertWarning(Title:string) {
    Swal.fire({
        icon: 'warning',
        title: Title,
        showConfirmButton: false,
        timer: 2000
    });
}

export function AlertInfo(Title:string) {
    Swal.fire({
        icon: 'info',
        title: Title,
        showConfirmButton: false,
        timer: 2000
    });
}

export function AlertQuestion(Title:string) {
    Swal.fire({
        icon: 'question',
        title: Title,
        showConfirmButton: false,
        timer: 2000
    });
}