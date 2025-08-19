import { GiHamburgerMenu } from "react-icons/gi";
import './Layout.css';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { IoPeople } from "react-icons/io5";
import { FaCalendarCheck } from "react-icons/fa6";
import { GiTakeMyMoney } from "react-icons/gi";
import { RiExchangeDollarLine } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'collapsed'}`}>
      <div className="sidebar-header">
        <button className="menu-btn" onClick={toggleSidebar}>
          <GiHamburgerMenu size={20} />
        </button>
      </div>
      <ul style={{fontSize: '25px', textAlign: isOpen? 'left': 'center'}}>
        <li title="Dashboard">
            {
                isOpen? "Dashboard": <MdOutlineDashboardCustomize size={25}/>
            }
        </li>
        <li title="Employees">
            {
                isOpen? "Employees": <IoPeople size={25}/>
            }
        </li>
        <li title="Attendance">
            {
                isOpen? "Attendance": <FaCalendarCheck size={25}/>
            }
        </li>
        <li title="Payroll">
            {
                isOpen? "Payroll": <GiTakeMyMoney size={25}/>
            }
        </li>
        <li title="Subscription">
            {
                isOpen? "Subscription": <RiExchangeDollarLine size={25}/>
            }
        </li>
        {/* <li title="Settings">
            {
                isOpen? "Settings": <MdOutlineSettings size={25}/>
            }
        </li> */}
      </ul>
    </div>
  );
}
