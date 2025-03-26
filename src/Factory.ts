function getFactory (realm: RealmType): CreatureFactory {
    if (realm === "fire") {
        return new FireRealmFactory();
    } else {
        return new WaterRealmFactory();
    }
}