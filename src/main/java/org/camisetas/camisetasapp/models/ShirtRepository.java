package org.camisetas.camisetasapp.models;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;


@Repository
public interface ShirtRepository extends JpaRepository<Shirt, Long> {

}





