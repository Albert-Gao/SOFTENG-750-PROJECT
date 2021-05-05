import { TeamMember } from './TeamMember'

export const Teams: React.FC = () => (
    <div className="bg-white rounded-lg">
        <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:py-24">
            <div className="space-y-12">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    Meet our leadership
                </h2>

                <ul className="space-y-12 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8 lg:gap-y-12 lg:space-y-0">
                    <li>
                        <TeamMember
                            portraitSrc="https://static.turbosquid.com/Preview/2018/06/01__15_20_02/I1.png2D1B80B1-846B-45E9-BE40-0AFCF8B26367Res300.jpg"
                            name="Albert Gao"
                            title="Software Developer"
                            description="
                            UPI: hgao611
                            ID: 638709360"
                        />
                    </li>
                    <li>
                        <TeamMember
                            portraitSrc="https://static.turbosquid.com/Preview/2018/06/01__15_20_02/I1.png2D1B80B1-846B-45E9-BE40-0AFCF8B26367Res300.jpg"
                            name="Yuxin Chen"
                            title="Software Developer"
                            description="
                            UPI: yche864
                            ID: 120924250"
                        />
                    </li>
                    <li>
                        <TeamMember
                            portraitSrc="https://static.turbosquid.com/Preview/2018/06/01__15_20_02/I1.png2D1B80B1-846B-45E9-BE40-0AFCF8B26367Res300.jpg"
                            name="Evan Zhou"
                            title="Software Developer"
                            description="
                            UPI: yzho976
                            ID: 669861533"
                        />
                    </li>
                    <li>
                        <TeamMember
                            portraitSrc="https://static.turbosquid.com/Preview/2018/06/01__15_20_02/I1.png2D1B80B1-846B-45E9-BE40-0AFCF8B26367Res300.jpg"
                            name="Henry Yang"
                            title="Software Developer"
                            description="
                            UPI: syan386
                            ID: 742097923"
                        />
                    </li>
                </ul>
            </div>
        </div>
    </div>
)
