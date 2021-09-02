package org.camisetas.camisetasapp.models;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShirtRepository extends CrudRepository<Shirt, Long> { }
