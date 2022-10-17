import { Fragment, useCallback, useEffect } from "react";
import toast, { Toaster, ToastBar } from "react-hot-toast";

const types = {
  default: "blank",
  error: "error",
  success: "success",
  warning: "warning",
  loading: "loading",
  blank: "blank",
  custom: "custom",
};

const styles = {
  default: { right: "15px", left: "auto" },
  left: { right: "auto", left: "15px" },
  right: { right: "15px", left: "auto" },
  center: { right: "0px", left: "0px" },
};

const toastOptions = {
  // duration: 500000000,
  success: {
    style: {
      color: "#155724",
      backgroundColor: "#d4edda",
      borderColor: "#c3e6cb",
    },
  },
  warning: {
    style: {
      color: "#856404",
      backgroundColor: "#fff3cd",
      borderColor: "#ffeeba",
    },
  },
  error: {
    style: {
      color: "#721c24",
      backgroundColor: "#f8d7da",
      borderColor: "#f5c6cb",
    },
  },
};

export const SnackBar = (props) => {
  useEffect(() => {
    (() => {
      if (props?.snackbar?.message) {
        toast(props?.snackbar?.message, {
          type: types[props?.snackbar?.type || "default"],
        });
      }
    })();
  }, [props?.snackbar?.message, props?.snackbar?.type])

  const handleClose = useCallback(() => {
    props.actions.setSanckBarProperties({
      isShow: false,
      message: "",
      position: "",
      type: "",
    });
  }, [props.actions]);

  useEffect(() => {
    if (props?.snackbar?.isShow) {
      setTimeout(handleClose, 2000);
    }
  }, [props?.snackbar?.isShow, handleClose]);

  return (
    <Toaster toastOptions={toastOptions}>
      {(t) => (
        <ToastBar toast={t}>
          {({ icon, message }) => (
            <Fragment>
              {icon}
              {message}
              {!props?.showClose && t.type !== "loading" && (
                <button
                  type="button"
                  className="close"
                  onClick={() => {
                    toast.dismiss(t.id);
                    handleClose();
                  }}
                >
                  X
                </button>
              )}
            </Fragment>
          )}
        </ToastBar>
      )}
    </Toaster>
  );
};
