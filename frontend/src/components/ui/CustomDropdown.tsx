import {
  useEffect,
  useRef,
  useState,
} from "react";

interface Option {

  label: string;

  value: string;
}

interface Props {

  value: string;

  options: Option[];

  onChange: (
    value: string
  ) => void;
}

export function
CustomDropdown({
  value,
  options,
  onChange,
}: Props) {

  const [
    open,
    setOpen,
  ] = useState(false);

  const ref =
    useRef<HTMLDivElement>(
      null
    );

  useEffect(() => {

    function handleClick(
      event: MouseEvent
    ) {

      if (
        ref.current &&
        !ref.current.contains(
          event.target as Node
        )
      ) {

        setOpen(false);
      }
    }

    window.addEventListener(
      "click",
      handleClick
    );

    return () => {

      window.removeEventListener(
        "click",
        handleClick
      );
    };

  }, []);

  const selected =
    options.find(
      (option) =>
        option.value ===
        value
    );

  return (

    <div
      ref={ref}

      style={{
        position: "relative",

        width: "100%",
      }}
    >

      <button
        onClick={() =>
          setOpen(
            !open
          )
        }

        style={{
          width: "100%",

          background:
            "rgba(255,255,255,0.04)",

          border:
            open
              ? "1px solid rgba(240,185,11,0.5)"
              : "1px solid rgba(255,255,255,0.08)",

          borderRadius: 14,

          padding:
            "14px 16px",

          color: "white",

          cursor: "pointer",

          display: "flex",

          justifyContent:
            "space-between",

          alignItems:
            "center",

          transition: "0.25s",
        }}
      >

        <span>
          {
            selected?.label
          }
        </span>

        <span
          style={{
            color:
              open
                ? "#f0b90b"
                : "#888",
          }}
        >
          ▼
        </span>

      </button>

      {open && (

        <div
          style={{
            position:
              "absolute",

            top:
              "calc(100% + 8px)",

            left: 0,

            right: 0,

            background:
              "rgba(15,15,20,0.98)",

            border:
              "1px solid rgba(255,255,255,0.06)",

            borderRadius: 16,

            overflow: "hidden",

            zIndex: 999,

            backdropFilter:
              "blur(20px)",

            boxShadow:
              "0 20px 40px rgba(0,0,0,0.45)",
          }}
        >

          {options.map(
            (option) => (

              <button
                key={
                  option.value
                }

                onClick={() => {

                  onChange(
                    option.value
                  );

                  setOpen(
                    false
                  );
                }}

                style={{
                  width: "100%",

                  background:
                    option.value ===
                      value

                      ? "rgba(240,185,11,0.14)"

                      : "transparent",

                  border: "none",

                  color: "white",

                  padding:
                    "14px 16px",

                  textAlign:
                    "left",

                  cursor:
                    "pointer",

                  transition:
                    "0.2s",
                }}

                onMouseEnter={(
                  e
                ) => {

                  e.currentTarget.style.background =
                    "rgba(240,185,11,0.10)";
                }}

                onMouseLeave={(
                  e
                ) => {

                  e.currentTarget.style.background =
                    option.value ===
                      value

                      ? "rgba(240,185,11,0.14)"

                      : "transparent";
                }}
              >

                {
                  option.label
                }

              </button>
            )
          )}

        </div>
      )}

    </div>
  );
}