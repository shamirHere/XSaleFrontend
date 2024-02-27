import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {TitleHeader, CategoriesItemBox, AdsCard} from '../../component/shared';
import styles from '../../assets/styles';
import {FilterBox} from '../../component/Home';
import images from '../../assets/images';
import icons from '../../assets/icons';
import {CategoriesBox} from '../../component/addNewListing';

const ProductsListing = ({navigation, route}) => {
  const title = route.params;

  const Vehicle = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'Car', image: images.car},
    {id: 2, itemName: 'Ambulance', image: images.ambulance},
    {id: 3, itemName: 'Truck', image: images.truck},
    {id: 4, itemName: 'Tractor', image: images.tractor},
    {id: 5, itemName: 'Farm Machine', image: images.farm_machine},
    {id: 6, itemName: 'JCB', image: images.JCB},
    {id: 7, itemName: 'Bus', image: images.bus},
    {id: 8, itemName: 'Crain', image: images.crain},
  ];

  const Mobile = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'Mobile', image: images.mobile},
    {id: 2, itemName: 'Table', image: images.tablet},
    {id: 3, itemName: 'Accessories', image: images.accessories},
  ];

  const Bike = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'Bike', image: images.bike},
    {id: 2, itemName: 'Scooty', image: images.scooty},
    {id: 3, itemName: 'Bicycle', image: images.bicycle},
  ];

  const Electronics = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'AC', image: images.ac},
    {id: 2, itemName: 'TV', image: images.tv},
    {id: 3, itemName: 'Fridge', image: images.fridge},
    {id: 4, itemName: 'Washing Machine', image: images.washing_machine},
    {id: 5, itemName: 'Coolers and Fans', image: images.cooler},
    {id: 6, itemName: 'Kitchen Appliances', image: images.kitchen_appliances},
    {id: 7, itemName: 'Laptop/Computer', image: images.laptop_computer},
    {id: 8, itemName: 'Laptop Accessories', image: images.laptop_accessories},
  ];

  const Jobs = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'Farm Labour', image: icons.farmer},
    {id: 2, itemName: 'Factory Woker', image: icons.factory_worker},
    {
      id: 3,
      itemName: 'Building Construction',
      image: icons.building_construction,
    },
    {
      id: 4,
      itemName: 'Building Construction',
      image: icons.building_construction,
    },
    {id: 5, itemName: 'Maid', image: icons.maid},
    {id: 6, itemName: 'Driver', image: icons.driver},
    {id: 7, itemName: 'Security', image: icons.security},
    {id: 8, itemName: 'Cook', image: icons.cook},
    {id: 9, itemName: 'Supervisor', image: icons.supervisor},
    {id: 10, itemName: 'Teacher', image: icons.teacher},
    {id: 11, itemName: 'Data Entry', image: icons.data_entry},
    {id: 12, itemName: 'Sales & Marketing', image: icons.sales_marketing},
    {id: 13, itemName: 'BPO', image: icons.bpo},
    {id: 14, itemName: 'Office Assistant', image: icons.office_assistant},
    {id: 15, itemName: 'Accountant', image: icons.accountant},
    {
      id: 16,
      itemName: 'Operator & Technician',
      image: icons.operator_technician,
    },
    {id: 17, itemName: 'IT Engineer & Developer', image: icons.developer},
    {id: 18, itemName: 'Designer', image: icons.designer},
    {id: 19, itemName: 'Hotel & Restaurant', image: icons.hotel_restaurant},
  ];

  const Matrimonial = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'Bride', image: images.bride},
    {id: 1, itemName: 'Groom', image: images.groom},
  ];

  const Furniture = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'Bed & Wardrobe', image: images.bed_wardrobe},
    {id: 2, itemName: 'Sofa & Dining', image: images.sofa},
    {id: 3, itemName: 'Home Decor', image: images.home_decor},
    {id: 4, itemName: 'Kids & Furniture', image: images.kid_furniture},
    {id: 5, itemName: 'Other Furnitures'},
  ];

  const Animal = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'Cow', image: images.cow},
    {id: 2, itemName: 'Buffalo', image: images.buffalo},
    {id: 3, itemName: 'Bull', image: images.bull},
    {id: 6, itemName: 'Sheep', image: images.sheep},
    {id: 7, itemName: 'Cat', image: images.cat},
    {id: 4, itemName: 'Goat', image: images.goat},
    {id: 5, itemName: 'Dog', image: images.dog},
    {id: 7, itemName: 'Horse', image: images.horse},
    {id: 8, itemName: 'Donkey', image: images.donkey},
    {id: 9, itemName: 'OtheR Animals'},
  ];

  const PuoltryAndBirds = [
    {id: 0, name: 'All'},
    {id: 1, name: 'Chicken', image: images.chicken},
    {id: 2, name: 'Fish', image: images.fish},
    {id: 3, name: 'Birds', image: images.birds},
    {id: 3, name: 'Birds', image: images.birds},
  ];

  const FarmMachine = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'Threshers', image: images.threshers},
    {id: 2, itemName: 'Crop Cutter', image: images.crop_cutter},
    {id: 3, itemName: 'Power Thriller', image: images.power_thriller},
    {id: 4, itemName: 'Trailor', image: images.trailer},
    {id: 5, itemName: 'Cultivator', image: images.cultivator},
    {
      id: 6,
      itemName: 'Harvesting & Machinery',
      image: images.harversting_machinery,
    },
    {id: 7, itemName: 'Sprayers', image: images.sprayer},
    {id: 8, itemName: 'Ground Cover', image: images.ground_covers},
    {id: 9, itemName: 'Boundary Fencing', image: images.boundry_fencing},
    {id: 10, itemName: 'Other Farm Machinery'},
  ];

  const Services = [
    {id: 0, itemName: 'All'},
    {id: 1, itemName: 'Education & Classes', image: images.education_classes},
    {id: 2, itemName: 'Tour & Travels', image: images.tour_travels},
    {
      id: 3,
      itemName: 'Electronic Repair & Services',
      image: images.electronic_repair_service,
    },
    {id: 4, itemName: 'Health & Beauty', image: images.health_beauty},
    {
      id: 5,
      itemName: 'Home Renovation',
      image: images.homeReinnovation_services,
    },
    {
      id: 6,
      itemName: 'Legal & Document Services',
      image: images.legal_documentServices,
    },
    {id: 7, itemName: 'Packers & Movers', image: images.packers_movers},
    {id: 8, itemName: 'Other services', image: images.packers_movers},
  ];

  const renderCatrgoryItemBox = () => {
    if (title === 'Mobile') {
      Mobile.map((item, index) => {
        return (
          <CategoriesItemBox
            image={item.image}
            itemName={item.itemName}
            style={[styles.mr12]}
          />
        );
      });
    } else if (title === 'Bike') {
      Bike.map((item, index) => {
        return (
          <CategoriesItemBox
            image={item.image}
            itemName={item.itemName}
            style={[styles.mr12]}
          />
        );
      });
    }
  };

  return (
    <SafeAreaView style={[styles.pdh16]}>
      <TitleHeader title={title} onBackPress={() => navigation.pop()} />
      <View
        style={[
          {
            borderBottomWidth: 1,
            width: '200%',
            alignSelf: 'center',
            opacity: 0.2,
          },
        ]}></View>
      <ScrollView style={[{height: '95%'}, styles.mt8]}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[{height: 100, width: '100%'}]}>
          {title === 'Mobile' &&
            Mobile.map((item, index) => {
              return (
                <CategoriesItemBox
                  image={item.image}
                  itemName={item.itemName}
                  style={[styles.mr12]}
                />
              );
            })}
        </ScrollView>
        <View style={[{height: 649, width: '100%'}, styles.mt12]}>
          <FilterBox label={title} style={[styles.mb12]} />
          <ScrollView>
            <View
              style={[
                styles.fdRow,
                styles.mt12,
                {justifyContent: 'space-between'},
              ]}>
              <AdsCard />
              <AdsCard />
            </View>
            <View
              style={[
                styles.fdRow,
                styles.mt12,
                {justifyContent: 'space-between'},
              ]}>
              <AdsCard />
              <AdsCard />
            </View>
            <View
              style={[
                styles.fdRow,
                styles.mt12,
                {justifyContent: 'space-between'},
              ]}>
              <AdsCard />
              <AdsCard />
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductsListing;
