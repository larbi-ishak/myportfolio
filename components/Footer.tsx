import { IconAward } from "@tabler/icons-react";

export default function Footer (){
    return (
        <footer>
            <hr />
            <div className="flex justify-between">
                <div>
                    2023 &copy; LARBI ISHAK
                </div>
                <div>
                    <IconAward />
                </div>
            </div>
        </footer>
    )
}