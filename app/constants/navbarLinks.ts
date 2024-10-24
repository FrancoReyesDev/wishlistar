import GiftIcon from "~/components/icons/gift";
import ProfileIcon from "~/components/icons/profile";

interface NavbarLink {
  ref: string;
  label: string;
  Icon: typeof ProfileIcon;
}

/* 
<li>
<a>
  <GroupIcon />
  Friends
</a>
</li>
<li>
<a>
  <StarIcon />
  Secret santa
</a>
</li>
<li>
<a>
  <CogIcon />
  Options
</a>
</li>
</ul>
**/
export function createUserNavbar(userId: string): NavbarLink[] {
  function createRef(ref: string) {
    return `/${userId}/${ref}`;
  }

  return [
    {
      ref: createRef(""),
      label: "profile",
      Icon: ProfileIcon,
    },
    { ref: createRef("wishlists"), label: "wishlists", Icon: GiftIcon },
  ];
}

const guestNavbarLink = [];
