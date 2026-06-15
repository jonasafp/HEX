import type {
  LongCodingProfile,
} from "../../types/longCoding";

interface Props {
  coding: LongCodingProfile;
}

export function LongCodingPanel({
  coding,
}: Props) {

  return (

    <div
      style={{
        marginTop: 24,
        padding: 24,
        borderRadius: 20,
        background:
          "rgba(255,255,255,0.03)",
      }}
    >

      <h2>
        Long Coding
      </h2>

      {coding.bytes.map(
        (item) => (

          <div
            key={item.byte}
            style={{
              marginBottom: 10,
              fontFamily:
                "monospace",
            }}
          >
            Byte {item.byte}
            {" : "}
            {item.bits
              .map((b) =>
                b ? "1" : "0"
              )
              .join("")}
          </div>
        )
      )}

    </div>
  );
}