/**
 * @TODO : Mongoose modellek segítségével frissitsen egy 'building' entitást az adatbázisban.
 * - el kell menteni egy új "classroom" entitást.
 * - ki kell nyeri az új "classroom" id-ját.
 * - az id-t helyezze el a megfelelő 'Building' entitás 'classrooms' listájába
 *
 * A @getAll metódus adja vissza a populált teljes "building" listát
 */
const Building = require('../../models/building.model');
const Classroom = require('../../models/classroom.model');


exports.update = (buildingId, className) => {
    const classroom = new Classroom(className);
    return classroom.save()
        .then(() => buildingId)
        .then(bID => {
            bID.classrooms.push(classroom._id);
            return bID.save();
        })
        .then(() => classroom);
};

exports.getAll = () => Building.find().populate('classrooms');