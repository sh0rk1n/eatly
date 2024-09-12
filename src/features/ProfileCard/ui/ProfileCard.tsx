import React, { memo, useEffect, useState } from "react";
import { useAuthStore } from "app/providers/store/auth";
import { useAuth } from "shared/lib/hooks/auth/useAuth";

export const ProfileCard = memo(() => {
  const { user } = useAuthStore();
  const { getUserInfo } = useAuth();
  const [name, setName] = useState("");

  useEffect(() => {
    getUserInfo().then((usersData) => {
      const matchingUser = usersData?.find((u) => u.email === user.email);
      // eslint-disable-next-line
      matchingUser && setName(matchingUser.name);
    });
  }, []);

  return <>{name}</>;
});
